from operator import truediv
from flask import Blueprint, request
from app.models import Cart, CartItem, db
from datetime import datetime

cart_routes = Blueprint('carts', __name__)

@cart_routes.route('/', methods=['POST'])
def create_cart():
    user_id = request.json.get('userId')
    cart = Cart(
        user_id = user_id,
        completed_order = False,
        created_at = datetime.utcnow()
    )
    db.session.add(cart)
    db.session.commit()
    return f'{cart.id}'

@cart_routes.route('/<int:cartId>/checkout', methods=['PUT'])
def checkout_cart(cartId):
    cart = Cart.query.get(int(cartId))
    cart.completed_order = True

    db.session.commit()
    return cart.to_dict()

@cart_routes.route('/<int:cartId>/cartItems', methods=['GET'])
def get_cart_items(cartId):
    cart_items = db.session.query(CartItem).filter(CartItem.cart_id == cartId)

    return { 'cartItems': [cart_item.to_dict() for cart_item in cart_items]}

@cart_routes.route('/<int:cartId>/cartItems', methods=['POST'])
def add_cart_item():
    data = request.json
    cart_item = CartItem(
        cart_id = data['cartId'],
        product_id = data['productId'],
        quantity = data['quantity']
    )
    db.session.add(cart_item)
    db.session.commit()
    return cart_item.to_dict()

from operator import truediv
from flask import Blueprint, request
from app.models import Cart, db
from datetime import datetime

cart_routes = Blueprint('carts', __name__)

@cart_routes.route('/', methods=['POST'])
def create_cart():
    # print(request.json)
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
    cart = Cart.query.get(cartId)
    cart.completed_order = True

    db.session.commit()
    return cart.to_dict()

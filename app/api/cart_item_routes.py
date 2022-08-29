from flask import Blueprint, request
from app.models import CartItem, cart, db

cart_item_routes = Blueprint('cartItems', __name__)

@cart_item_routes.route('/cartItems/<cartItemId>/delete', methods=['DELETE'])
def delete_cart_item(cartItemId):
    cart_item = CartItem.query.get(int(cartItemId))
    data = cart_item.to_dict()
    db.session.delete(cart_item)
    db.session.commit()
    return data

@cart_item_routes.route('/<cartItemId>/edit', methods=['PUT'])
def update_cart_item(cartItemId):
    cart_item = CartItem.query.get(cartItemId)
    quantity = request.json.get('quantity')
    cart_item.quantity = quantity
    db.session.commit()
    return cart_item.to_dict()

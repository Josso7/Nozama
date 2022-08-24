from .db import db

class CartItems(db.Model):
    __tablename__ = 'cartItems'

    id = db.Column(db.Integer, primary_key = True, nullable = False)
    cart_id = db.Column(db.Integer, nullable = False, unique = False)
    product_id = db.Column(db.Integer, nullable = False, unique = False)
    quantity = db.Column(db.Integer, nullable = False, unique = False)

    def to_dict(self):
        return {
            'id': self.id,
            'cart_id': self.cart_id,
            'product_id': self.product_id,
            'quantity': self.quantity
        }

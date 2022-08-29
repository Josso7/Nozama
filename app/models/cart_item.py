from .db import db

class CartItem(db.Model):
    __tablename__ = 'cartitems'

    id = db.Column(db.Integer, primary_key = True)
    cart_id = db.Column(db.Integer, db.ForeignKey('carts.id'), nullable = False, unique = False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable = False, unique = False)
    quantity = db.Column(db.Integer, nullable = False, unique = False)

    cart = db.relationship('Cart', back_populates='cartItems')

    def to_dict(self):
        return {
            'id': self.id,
            'cart_id': self.cart_id,
            'product_id': self.product_id,
            'quantity': self.quantity
        }

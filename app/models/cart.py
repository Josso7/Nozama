from .db import db

class Cart(db.Model):
    __tablename__ = 'carts'

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False, unique = False)
    completed_order = db.Column(db.Boolean, nullable = False, unique = False)
    created_at = db.Column(db.DateTime, nullable = False, unique = False)

    user = db.relationship('User', back_populates='cart')
    CartItems = db.relationship('CartItems', back_populates='cart')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'completed_order': self.completed_order,
            'created_at': self.created_at
        }

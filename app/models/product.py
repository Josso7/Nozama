from .db import db

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False, unique = False)
    price = db.Column(db.Integer, nullable = False, unique = False)
    category = db.Column(db.String(100), nullable = False, unique = False)
    description = db.Column(db.String(2000), nullable = False, unique = False)
    image0 = db.Column(db.String(1000), nullable = False, unique = False)
    image1 = db.Column(db.String(1000), nullable = True, unique = False)
    image2 = db.Column(db.String(1000), nullable = True, unique = False)
    image3 = db.Column(db.String(1000), nullable = True, unique = False)
    image4 = db.Column(db.String(1000), nullable = True, unique = False)
    image5 = db.Column(db.String(1000), nullable = True, unique = False)

def to_dict(self):
    return {
        'id': self.id,
        'name': self.name,
        'price': self.price,
        'category': self.category,
        'description': self.description,
        'image0': self.image0,
        'image1': self.image1,
        'image2': self.image2,
        'image3': self.image3,
        'image4': self.image4,
        'image5': self.image5
    }

from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField

class ProductForm(FlaskForm):
    name = StringField('name')
    price = IntegerField('price')
    category = StringField('category')
    description = StringField('description')
    image0 = StringField('image0')
    image1 = StringField('image1')
    image2 = StringField('image2')
    image3 = StringField('image3')
    image4 = StringField('image4')
    image5 = StringField('image5')

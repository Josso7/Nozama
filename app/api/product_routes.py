from math import prod
from flask import Blueprint, request
from app.models import Product, db
from app.forms.product_form import ProductForm
product_routes = Blueprint('products', __name__)

@product_routes.route('/', methods=['POST'])
def add_product():
    form = ProductForm()

    product = Product(
        name = form['name'].data,
        price = form['price'].data,
        category = form['category'].data,
        description = form['description'].data,
        image0 = form['image0'].data,
        image1 = form['image1'].data,
        image2 = form['image2'].data,
        image3 = form['image3'].data,
        image4 = form['image4'].data,
        image5 = form['image5'].data,
    )

    db.session.add(product)
    db.session.commit()

    return product.to_dict()

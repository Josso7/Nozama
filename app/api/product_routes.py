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

@product_routes.route('/<int:productId>/edit', methods=['PUT'])
def edit_product(productId):
    product = Product.query.get(int(productId))
    form = ProductForm()
    product.name = form['name'].data
    product.price = form['price'].data
    product.category = form['category'].data
    product.description = form['description'].data
    product.image0 = form['image0'].data
    product.image1 = form['image1'].data
    product.image2 = form['image2'].data
    product.image3 = form['image3'].data
    product.image4 = form['image4'].data
    product.image5 = form['image5'].data

    db.session.commit()

    return product.to_dict()

@product_routes.route('/<int:productId>/delete', methods=['DELETE'])
def delete_product(productId):
    product = Product.query.get(int(productId))
    data = product.to_dict()

    db.session.delete(product)
    db.session.commit()

    return data

@product_routes.route('/', methods=['GET'])
def get_all_products():
    products = db.session.query(Product).all()
    return { "products": [product.to_dict() for product in products] }

from tkinter import Image
from flask import Blueprint, request
from ..aws_s3 import upload_file_to_s3
from app.forms.image_form import ImageForm

aws_routes = Blueprint('test', __name__)

@aws_routes.route('/', methods=['POST'])
def upload_image():
    form = ImageForm()
    image = form['image'].data
    # print(image)
    print(upload_file_to_s3(image))
    return 'done'

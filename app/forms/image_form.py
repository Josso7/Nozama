from flask_wtf import FlaskForm
from wtforms import StringField, FileField
from wtforms.validators import DataRequired, ValidationError, Length

class ImageForm(FlaskForm):
    image = FileField('image')

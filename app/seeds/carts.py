from app.models import db, Cart
from datetime import datetime

def seed_carts():
    cart0 = Cart(user_id = 1, completed_order = False, created_at = datetime.utcnow())
    cart1 = Cart(user_id = 1, completed_order = True, created_at = datetime.utcnow())
    cart2 = Cart(user_id = 2, completed_order = False, created_at = datetime.utcnow())

from app.models import db, Cart
from datetime import datetime

def seed_carts():
    cart0 = Cart(user_id = 1, completed_order = False, created_at = datetime.utcnow())
    cart1 = Cart(user_id = 1, completed_order = True, created_at = datetime.utcnow())
    cart2 = Cart(user_id = 2, completed_order = False, created_at = datetime.utcnow())

    db.session.add(cart0)
    db.session.add(cart1)
    db.session.add(cart2)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the carts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_carts():
    db.session.execute('TRUNCATE carts RESTART IDENTITY CASCADE;')
    db.session.commit()

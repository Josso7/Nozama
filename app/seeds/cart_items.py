from app.models import CartItem, db


def seed_cart_items():
    cart_item_1 = CartItem(cart_id = 1, product_id = 1, quantity = 2)
    cart_item_2 = CartItem(cart_id = 1, product_id = 2, quantity = 1)

    db.session.add(cart_item_1)
    db.session.add(cart_item_2)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the carts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_cart_items():
    db.session.execute('TRUNCATE cartItems RESTART IDENTITY CASCADE;')
    db.session.commit()

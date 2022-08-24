from app.models import db, Product

def seed_products():
    guitar = Product(name = 'guitar', price = 199, category = 'Musical Instruments', description = 'Acoustic Guitar: The RockJam W101 acoustic guitar has a dreadnought ergonomic body that is made for playability and has a desirable high-gloss finish. Metal Gear-heads and Steel Strings: Metal gearheads make tuning your guitar easier and more accurate and the steel strings will ensure your guitar remains in tune for longer once settled. Guitar Tuner: No acoustic guitar beginner kit would be complete without a guitar tuner, this clip-on guitar tuner is both easy to use and provides clear feedback to the player. Guitar Stand & Guitar Bag: For when you are not playing, the foldable guitar stand included in this package will ensure that your acoustic guitar can be displayed safely and proudly. The Guitar bag has 5mm of padding and two straps so you can transport your acoustic guitar with ease. Guitar Accessories: Weather you are looking for a kids guitar or a guitar for adults, everyone has a different playing style, the included guitar strap within this package will help those looking to stand whilst they play, to cover you in case of breakages, this guitar package included a spare set of acoustic guitar strings and guitar picks and a plectrum holder are included because you can never have too many.', image0 = '')
    nintento_switch = Product(name = 'nintento switch', price = 299, category = 'Gaming Consoles', description = 'Nintendos latest generation gaming console', image0 = '')
    drone = Product(name = 'drone', price = 99, category = 'Electronics', description = 'Remotely controlled bluetooth drone, download the app and get started today!', image0 = '')


    db.session.add(guitar)
    db.session.add(nintento_switch)
    db.session.add(drone)
    db.session.commit()
    
# Uses a raw SQL query to TRUNCATE the carts table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

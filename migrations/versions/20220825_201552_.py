"""empty message

Revision ID: 5310147e3d68
Revises: df391139894c
Create Date: 2022-08-25 20:15:52.659479

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5310147e3d68'
down_revision = 'df391139894c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_foreign_key(None, 'cartItems', 'carts', ['cart_id'], ['id'])
    op.create_foreign_key(None, 'cartItems', 'products', ['product_id'], ['id'])
    op.create_foreign_key(None, 'carts', 'users', ['user_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'carts', type_='foreignkey')
    op.drop_constraint(None, 'cartItems', type_='foreignkey')
    op.drop_constraint(None, 'cartItems', type_='foreignkey')
    # ### end Alembic commands ###

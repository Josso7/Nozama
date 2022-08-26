import React from 'react';
import { useState } from 'react';
import { createCart, checkoutCart } from '../../store/cart';
import { useDispatch } from 'react-redux';

const AWS = () => {
    const dispatch = useDispatch();
    const [imageFile, setImageFile] = useState('');

    const uploadFile = async (e) => {
        const formData = new FormData()
        formData.append('image', imageFile)
      const res = await fetch('/api/test/', {
        method: 'POST',
        body: formData
      })
      console.log(res)
    }

    const testTheThing = async (e) => {
      const one = 1
      // const res = await fetch('/api/carts/', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     one
      //   })
      // })
      dispatch(checkoutCart(40, 1))
    }

    return (
      <>
        <form onSubmit={e => uploadFile(e)}>
            <label className='upload-files-button' htmlFor='upload-files-input'>SELECT FILE</label>
              <input
                id='upload-files-input'
                type='file'
                onChange={e => setImageFile(e.target.files[0])}
                ></input>
            <button type='submit'></button>
        </form>
        <button onClick={e => testTheThing(e)}> Test the thing </button>
      </>
    )
}

export default AWS;

import boto3
import os

s3 = boto3.client(
    "s3",
    aws_access_key_id=os.environ.get("S3_KEY"),
    aws_secret_access_key=os.environ.get("S3_SECRET"),
)

# for bucket in s3.list_buckets():
#     print(bucket.name)

# data = open('test.jpg', 'rb')
# s3.Bucket('my-bucket').put_object(Key='test.jpg', Body=data)

BUCKET_NAME = os.environ.get("S3_BUCKET")
S3_LOCATION = f"https://{BUCKET_NAME}.s3.amazonaws.com/"

def upload_file_to_s3(file, acl="public-read"):
    print(f"file: {file}, bucket: {BUCKET_NAME}, location: {S3_LOCATION}")

    try:
        s3.upload_fileobj(
            file,
            BUCKET_NAME,
            # 'test/{}'.format(file.filename),
            file.filename
        )
    except Exception as e:
        return {"errors": str(e)}

    return {"url": f"{S3_LOCATION}{file.filename}"}

# upload_file_to_s3('app/nozama.py')

FROM python:3.9-alpine

WORKDIR /code

COPY . /code/

RUN pip install -r requirements.txt && \
    python manage.py migrate && \
    echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@practice.com', 'password')" | python manage.py shell

CMD python manage.py runserver 0.0.0.0:8000

from django.db import models


class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)


class Task(models.Model):
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    done = models.BooleanField()
    complexity = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)

# Generated by Django 3.1.7 on 2021-03-28 14:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Article',
            new_name='Post',
        ),
    ]

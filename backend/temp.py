# -*- coding: utf-8 -*-
"""
Created on Tue Mar 28 11:58:35 2023

@author: rahim
"""
import requests
import random
import json
import os

# Load an color image in grayscale

# Specify the URL for Unsplash's home page
url = "http://localhost:1111/api/places"

# File to upload
with open('data.json', 'r') as file:
    # Load the JSON data into a Python object
    data = json.load(file)

for p in data:
    place = {}
    place["name"] = p["name"]
    place["type"] = "restaurant" if p["image"].startswith(
        "restaurant") else "hotel"
    place["lat"] = p["geometry"]["location"]["lat"]
    place["lng"] = p["geometry"]["location"]["lng"]
    place["image"] = p["image"]
    place["address"] = p["vicinity"]
    place["rating"] = p["rating"]
    place["ratingnumber"] = p["user_ratings_total"]

    response = requests.post(url, headers={},  data=place)
    if response.status_code == 200:
        print(p["name"] + " has created successfully")
        print(response.json())
    else:
        print(p["name"] + " is not craeted")
        print(response.json())


# files = {'avatar': open(file_path, 'rb')}
# multipart_data = {'metadata': (None, json.dumps(data), 'application/json')}
# # response = requests.post(url, files=files, data=multipart_data)
# response = requests.post(url, data=multipart_data)

# if response.status_code == 200:
#     print('File uploaded successfully')
# else:
#     print('Error uploading file')

# print(response.json())

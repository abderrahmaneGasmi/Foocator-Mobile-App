import os
import json
import random

def get_image_names(folder_path, extensions=['.png', '.jpg', '.jpeg', '.gif']):
    image_names = []
    for filename in os.listdir(folder_path):
        if any(filename.lower().endswith(ext) for ext in extensions):
            image_names.append(filename)
    return image_names
with open('data.json', 'r') as file:
    # Load the JSON data into a Python object
    data = json.load(file)
# Example usage
folder_path = './'  # Replace with the path to your folder containing images
image_names_list = get_image_names(folder_path)

for d in data:
    randomimage = random.choice(image_names_list)
    d["image"] = randomimage

# print(image_names_list)
file_path = 'object_data.json'

# Save the Python object as JSON
with open(file_path, 'w') as json_file:
    json.dump(data, json_file)
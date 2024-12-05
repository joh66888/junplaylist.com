import os

def rename_files():
    directory = "images"
    for filename in os.listdir(directory):
        if filename.endswith(".jpg"):
            old_path = os.path.join(directory, filename)
            new_filename = filename.lower().replace(" ", "_")
            new_path = os.path.join(directory, new_filename)
            os.rename(old_path, new_path)
            print(f"Renamed: {filename} -> {new_filename}")

if __name__ == "__main__":
    rename_files()

from pathlib import Path

from flask import Flask, send_from_directory


APP_DIR = Path(__file__).resolve().parent
PUBLIC_DIR = APP_DIR / "public"
app = Flask(__name__, static_folder=None)


@app.get("/")
def index():
    return send_from_directory(APP_DIR, "index.html")


@app.get("/src/<path:filename>")
def source_file(filename):
    return send_from_directory(APP_DIR / "src", filename)


@app.get("/assets/<path:filename>")
def asset_file(filename):
    return send_from_directory(PUBLIC_DIR / "assets", filename)


@app.get("/favicon.svg")
def favicon():
    return send_from_directory(PUBLIC_DIR, "favicon.svg")


@app.get("/robots.txt")
def robots():
    return send_from_directory(PUBLIC_DIR, "robots.txt")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
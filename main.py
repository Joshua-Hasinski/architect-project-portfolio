from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# This code is already correct for both environments
origins = [
    os.environ.get('FRONTEND_URL', 'http://localhost:5173') # Uses localhost if FRONTEND_URL isn't set
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# --- End of CORS Configuration ---

@app.get("/")
def read_root():
    return {"message": "API is running"}

@app.get("/data")
def get_data():
    return {"name": "Architect", "version": 1.0, "location": "Munroe Falls"}
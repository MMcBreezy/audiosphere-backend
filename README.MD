1. **Download the repository:**
   [https://github.com/MMcBreezy/audiosphere-backend.git](https://github.com/MMcBreezy/audiosphere-backend.git)

2. **Run Docker Compose:**
   ```bash
   docker-compose up
   ```

3. **Test the endpoint:**
   - **POST Request:**
     - URL: [http://localhost:3000/users](http://localhost:3000/users)
     - Body:
       ```json
       {
           "username": "dang ol",
           "email": "dangol@email.com"
       }
       ```
   - **GET Request:**
     - URL: [http://localhost:3000/users](http://localhost:3000/users)

import service from "./service"

const userServiceUrl = "http://localhost:8080/api/user"

const userService = service(userServiceUrl)

export default userService;
import service from "./service"

const locationServiceUrl = "http://localhost:8080/api/locations"

const locationService = service(locationServiceUrl)

export default locationService
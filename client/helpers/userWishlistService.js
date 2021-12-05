import service from "./service"

const userWishlistServiceUrl = "http://localhost:8080/api/user/wishlist"

const userWishlistService = service(userWishlistServiceUrl)

export default userWishlistService;
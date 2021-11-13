# DRONEBD

This project is named [DroneBD](https://dronebd.web.app/).

## About this Site

This is a drone based company which sell's drone to local consumer with a very low and affordable price. This site is made for both admin & normal user. An admin can browse many thing which a user can't. This site is build on react js, material ui(as a component library),bootstrap 5.1(as a css framework),little bit of css. ALso tried to do some animation so there is an animation library linked. I think you all will love this website.

In the project directory, you can see:

### Available Features

- There is 6 section in Home page(Navbar,Banner,Products List,Features,Customer Review & Footer). The Navbar is same for admin and user. But unless a user is logged in, some button will be hidden and won't work. There is a scroll to top button for user,when he scroll down some height.
- In the products section of home page, 6 products with the help of slick js are shown as a carousel. There is a button in the product which will only work for user who is logged in. If a user isn't logged in, after clicking this link, he/she will be forced back to Login. after login , there is a buy page where user will provide necessary information and will proceed to payment(for now this will be done automatically). Then there will be an alert saying order placed successfully. There is a button named 'Explore'. Logged in or not ,everyone can browse this page and see the products. But in time of placing order, he have to be logged in. Then the payment details will be shown up.
- In login page, a user can register if he/she didn't register before by providing some information.
- There is a section named features as it shows some features of good Drone from DroneBD. After that there is a review section, where customer's given review about the website. Then the footer section,It is kept as simple as possible.
- As a normal user, after clicking 'Dashboard' in header, he will be refer to another page where he/she will see some button named "My Orders","Add Review","Pay","Home","LogOut". At My order he can see only his ordered items and can cancel any order. At add review option, he can give a review with some rating (0-5) about his experience in this site,which will be added to home accordingly. At pay section, it is under Maintenance. The Home button will take user to home and logout will logout user from system.
- As an admin,after clicking 'Dashboard' in header, he will be refer to another page where he/she will see some button named "Manage All Orders","Add Products","Manage Products","Make Admin","Home","LogOut". At Manage All Orders section an admin can see all the order placed by all the user and can set the status of the order, Pending to Shipped. He also can delete this order if he wishes. At Add Product, an admin can add a new product to this website List. At manage products, he can delete any existing product from list. At add admin, he can make another user's a admin. Home and Logout is same as normal user.
- Also used axios for transferring data between 2 sides.



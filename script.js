//const { link } = require("fs");

//const { subscribe } = require("diagnostics_channel");

//for nav toggling
document.addEventListener('DOMContentLoaded', () =>{

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const body = document.querySelector('body');


burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    body.classList.toggle('nav-active');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.classList.remove('nav-active');
    });
});
})

//for all footer links
document.addEventListener('DOMContentLoaded', () =>{
    const footerBuger = document.querySelector('.footer-burger');
    const footer = document.querySelector('.footer-links');
    const body = document.querySelector('body');

    footerBuger.addEventListener('click', () =>{
        footer.classList.toggle('footer-active');
        footerBuger.classList.toggle('toggle');
        body.classList.toggle('footer-active');
    })

})

//for landing pages background changing
document.addEventListener('DOMContentLoaded', () =>{
    let intervald;
let currentIndex = 0;
const backgrounds = document.querySelectorAll('.background');
const textContents = document.querySelectorAll('.text-content');
const dots = document.querySelectorAll('.dot');

function changeBackground() {
    backgrounds.forEach(( bg, index) => {
        bg.style.opacity = index === currentIndex ? '1' : '0';
    });

    textContents.forEach((Text, index) => {
        Text.classList.remove('show');
        Text.classList.remove('hide');
        if ( index === currentIndex ) {
            setTimeout(() => {
                Text.classList.add('show');
                let tl = gsap.timeline();
            }, 1000);
        } else {
            Text.classList.add('hide');
        }
    });
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
    if (currentIndex < backgrounds.length - 1) {
        currentIndex++;
    } else {
        clearInterval(intervald);
    }
    
}

function navigateTo(index) {
    currentIndex = index;
    changeBackground();
    clearInterval(intervald);
}

// Initialize the first background as visible
document.addEventListener('DOMContentLoaded', () => {
    navigateTo(0);
    intervald = setInterval(changeBackground, 3000);
});

intervald = setInterval(changeBackground, 3000);
changeBackground();

let tl = gsap.timeline();
tl.from("nav",{
    y:-100,
    opacity: 0,
    duration: 0.2,
    ease: "expo.inOut"
})
.from(".navigation-dots > *",{
    y: -1000,
    opacity: 0,
    duration: 0.8,
    ease: "bounce.out",
    stagger: {
        amount: 0.5,
        from: "random"
    }
})
.from(".get-started",{
    y: -1000,
    opacity: 0,
    duration: 0.8,
    ease: "bounce.out",
    stagger: {
        amount: 0.5,
        from: "random"
    }
})
})

//function to control the left and right arrow in the index.html file
document.addEventListener('DOMContentLoaded', function () {
    function setupScroll(containerSelector, leftButtonId, rightButtonId) {
        const scrollContainer = document.querySelector(containerSelector);
        const scrollLeft = document.getElementById(leftButtonId);
        const scrollRight = document.getElementById(rightButtonId);

        if (!scrollContainer || !scrollLeft || !scrollRight) {
            console.error('One or more elements not found:', {
                scrollContainer: scrollContainer || 'Not Found',
                scrollLeft: scrollLeft || 'Not Found',
                scrollRight: scrollRight || 'Not Found'
            });
            return;
        }

        let isDown = false;
        let startX;
        let scrollLeftPos;

        function checkScrollButtons() {
            if (scrollContainer.scrollLeft <= 0) {
                scrollLeft.style.opacity = '0';
            } else {
                scrollLeft.style.opacity = '1';
            }

            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                scrollRight.style.opacity = '0';
            } else {
                scrollRight.style.opacity = '1';
            }
        }

        scrollContainer.addEventListener('scroll', checkScrollButtons);
        window.addEventListener('resize', checkScrollButtons);
        checkScrollButtons(); // Initial check

        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.classList.add('active');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeftPos = scrollContainer.scrollLeft;
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2; // Adjust the scroll speed
            scrollContainer.scrollLeft = scrollLeftPos - walk;
        });

        scrollLeft.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -300, // Adjust the value as needed
                behavior: 'smooth'
            });
            checkScrollButtons(); // Check buttons after scrolling
        });

        scrollRight.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: 250, // Adjust the value as needed
                behavior: 'smooth'
            });
            checkScrollButtons(); // Check buttons after scrolling
        });
    }

    // Setup scroll for the first set of buttons
    setupScroll('.testmonies', 'testimony-scroll-left', 'testimony-scroll-right');

    // Setup scroll for the second set of buttons (About Us section)
    setupScroll('.about-speech', 'scroll-left', 'scroll-right');
});

//for chat both in all html files
document.addEventListener('DOMContentLoaded', () => {
    const chatNowButton = document.getElementById('chat-now');
    chatNowButton.addEventListener('click', () => {
        if (typeof Tawk_API !== 'undefined') {
            Tawk_API.maximize();
        }
    });
});

//function that will store a suscriber's email adress in the contact us section of index.html file
document.addEventListener('DOMContentLoaded', function() {
    const subscribeForms = document.querySelectorAll('.subscribe-form');
    const emailInput = document.querySelector('.suscribe-form_input');

    subscribeForms.forEach(function(subscribeForm) {
        subscribeForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const email = emailInput.value;

            // Improved email validation
            function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
                return re.test(String(email).toLowerCase());
            }

            if (validateEmail(email)) {
                // Store the email in localStorage
                localStorage.setItem('newsletterEmail', email);
                alert('Thank you for subscribing to our newsletter!');
                subscribeForm.reset(); // Reset the form
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });
});

//for coin drawer in the investment.html file
document.addEventListener('DOMContentLoaded', () => {
    const coinHeaders = document.querySelectorAll('.coin-header h2');

    coinHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const coinHeader = header.parentElement;
            const allCoinCards = header.parentElement.nextElementSibling;
            if (allCoinCards && allCoinCards.classList.contains('all-coin-cards')) {
                allCoinCards.classList.toggle('open');
                coinHeader.classList.toggle('open');
            }
        });
    });
});

// Function to render referred users and total bonus
document.addEventListener('DOMContentLoaded', () =>{
function renderReferralDashboard() {
    const referredUsersList = document.getElementById('referred-users-list');
    const totalBonusElement = document.getElementById('total-bonus');
    let totalBonus = 0;

    referredUsers.forEach(user => {
        const row = document.createElement('tr');
        const userNameCell = document.createElement('td');
        const userBonusCell = document.createElement('td');

        userNameCell.textContent = user.name;
        userBonusCell.textContent = `$${user.bonus.toFixed(2)}`;

        row.appendChild(userNameCell);
        row.appendChild(userBonusCell);
        referredUsersList.appendChild(row);

        totalBonus += user.bonus;
    });

    totalBonusElement.textContent = `$${totalBonus.toFixed(2)}`;
}

// Render the referral dashboard on page load
if (document.getElementById('referred-users-list') && document.getElementById('total-bonus')) {
    renderReferralDashboard();
}
});

//function for  copy referal link
document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('#copy-referal-link');

    copyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const referralLink = document.getElementById('referal-link').textContent;
            navigator.clipboard.writeText(referralLink).then(() => {
                alert('Referral link copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy referral link: ', err);
            });
        });
    });
});

//function to render transaction for history.html
document.addEventListener('DOMContentLoaded', () => {

    function renderTransactions(filteredTransactions) {
        const transactionHistory = document.querySelector('.transaction-history');
        transactionHistory.innerHTML = ''; // Clear previous transactions

        if (filteredTransactions.length === 0) {
            transactionHistory.innerHTML = '<p>No transactions for that filter</p>';
            return;
        }

        filteredTransactions.forEach(transaction => {
            const transactionDiv = document.createElement('div');
            transactionDiv.classList.add('history');

            transactionDiv.innerHTML = `
                <div class="history-content">
                    <h3>${transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</h3>
                    <p>${transaction.date}, <span>${transaction.time}</span></p>
                </div>
                <div class="${transaction.status.toLowerCase() === 'success' ? 'green' : 'red'}">
                    <p>$${transaction.amount.toFixed(2)}</p>
                    <p>${transaction.status}</p>
                </div>
            `;

            transactionHistory.appendChild(transactionDiv);
        });
    }

    function filterTransactions() {
        const typeElement = document.getElementById('transaction-type');
        const currencyElement = document.getElementById('transaction-currency');
        const startMonthElement = document.getElementById('start-month');
        const startYearElement = document.getElementById('start-year');

        if (!typeElement || !currencyElement || !startMonthElement || !startYearElement) {
            console.error('One or more elements not found:', {
                typeElement: typeElement || 'Not Found',
                currencyElement: currencyElement || 'Not Found',
                startMonthElement: startMonthElement || 'Not Found',
                startYearElement: startYearElement || 'Not Found'
            });
            return;
        }

        const type = typeElement.value;
        const currency = currencyElement.value;
        const startMonth = startMonthElement.value;
        const startYear = startYearElement.value;

        const filteredTransactions = transactions.filter(transaction => {
            const transactionDate = new Date(transaction.date);
            const monthMatches = startMonth === '0' || (transactionDate.getMonth() + 1).toString().padStart(2, '0') === startMonth;
            const yearMatches = startYear === '0' || transactionDate.getFullYear().toString() === startYear;

            return (type === 'all' || transaction.type === type) &&
                   (currency === 'all' || transaction.currency === currency) &&
                   monthMatches &&
                   yearMatches;
        });

        renderTransactions(filteredTransactions);
    }

    const filterButton = document.getElementById('filter-button');
    if (filterButton) {
        filterButton.addEventListener('click', filterTransactions);
    }

    renderTransactions(transactions);
});

// Function to update UI for account details in investment.html file
function updateUI(coin, data) {
    const accountBalanceElement = document.getElementById(`${coin}-account-balance`);
    const totalEarningElement = document.getElementById(`${coin}-total-earning`);
    const activeDepositElement = document.getElementById(`${coin}-active-deposit`);
    const totalDepositElement = document.getElementById(`${coin}-total-deposit`);
    const referralBonusElement = document.getElementById(`${coin}-referral-bonus`);

    if (accountBalanceElement) {
        accountBalanceElement.textContent = `$ ${data.accountBalance.toFixed(2)}`;
    }
    if (totalEarningElement) {
        totalEarningElement.textContent = `$ ${data.totalEarning.toFixed(2)}`;
    }
    if (activeDepositElement) {
        activeDepositElement.textContent = `$ ${data.activeDeposit.toFixed(2)}`;
    }
    if (totalDepositElement) {
        totalDepositElement.textContent = `$ ${data.totalDeposit.toFixed(2)}`;
    }
    if (referralBonusElement) {
        referralBonusElement.textContent = `$ ${data.referralBonus.toFixed(2)}`;
    }
}

// Update UI for each coin
document.addEventListener('DOMContentLoaded', () => {
    // Update UI for each coin
    updateUI('bitcoin', data.bitcoin);
    updateUI('ethereum', data.ethereum);
    updateUI('litecoin', data.litecoin);
});

//function for make payment container in the doposit.html file
document.addEventListener('DOMContentLoaded', function() {
    // Function to display the make-payment div and blur other content
    function showMakePayment(plan) {
        // Hide other content
        document.querySelector('.investment-plan').style.filter = 'blur(5px)';
        document.querySelector('.investment-plan').style.pointerEvents = 'none';
        
        // Display the make-payment div
        document.querySelector('.make-payment').style.display = 'block';
        
        // Update the make-payment content with the selected plan details
        paymentPlans = document.getElementById('payment-plans').textContent = plan.querySelector('.plan-header h2').textContent;
        minAmount = document.getElementById('min-amount').textContent = plan.querySelector('.min-amount').textContent;
        maxAmount = document.getElementById('max-amount').textContent = plan.querySelector('.max-amount').textContent;
        investmentDuration = document.getElementById('investment-duration').textContent = plan.querySelector('.investment-duration').textContent;
        investmentProfit = document.getElementById('investment-profit').textContent = plan.querySelector('.investment-profit').textContent;
    }

    // Add event listeners to each select-to-invest link
    document.querySelectorAll('.target').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const plan = link.closest('.plans');
            const timeCounter = plan.querySelector('.time-duration-counter');
           if (timeCounter && timeCounter.dataset.counting === 'true') {
                alert('You cannot invest twice in a plan');
                return;
            }
            
            showMakePayment(plan);
            
        });
    });

    // Function to handle the submit button click
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();

        // Store the data content (you can customize this part as needed)
        var paymentData = {
            plan: document.getElementById('payment-plans').textContent,
            minAmount: document.getElementById('min-amount').textContent,
            maxAmount: document.getElementById('max-amount').textContent,
            duration: document.getElementById('investment-duration').textContent,
            profit: document.getElementById('investment-profit').textContent
        };
        console.log('Payment Data:', paymentData);
        
        // Hide the make-payment container and display the thanks-massage container
        document.querySelector('.make-payment').style.display = 'none';
        document.querySelector('.thanks-massage').style.display = 'block';
        
        // Start the time duration counter
        let selectedPlan;
        document.querySelectorAll('.plans').forEach(function(plan) {
            if (plan.querySelector('.plan-header h2').textContent === paymentData.plan) {
                selectedPlan = plan;
            }
        });
        const timeCounter = selectedPlan.querySelector('.time-duration-counter');
        startTimer(paymentData.duration, timeCounter);
    });
  

    // Function to start the timer
    function startTimer(duration, display) {
        var days = parseInt(duration.split(' ')[0]); // Extract the number of days
        var timer = days * 24 * 3600; // Convert days to seconds
        display.dataset.counting = 'true';
        var interval = setInterval(function() {
            var hours = Math.floor(timer / 3600);
            var minutes = Math.floor((timer % 3600) / 60);
            var seconds = timer % 60;
            display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            if (--timer < 0) {
                clearInterval(interval);
                display.dataset.counting = 'false';
            }
        }, 1000);
    }

    // Function to handle the cancel button click
    document.getElementById('payment-plans-cancel').addEventListener('click', function(event) {
        event.preventDefault();
        
        // Remove the make-payment container
        document.querySelector('.make-payment').style.display = 'none';
        
        // Restore other content
        document.querySelector('.investment-plan').style.filter = 'none';
        document.querySelector('.investment-plan').style.pointerEvents = 'auto';
    });

    // Function to handle the OK link click in the thanks-massage container
    document.querySelector('.thanks-massage a').addEventListener('click', function(event) {
        event.preventDefault();
        
        // Remove the thanks-massage container
        document.querySelector('.thanks-massage').style.display = 'none';
        
        // Restore other content
        document.querySelector('.investment-plan').style.filter = 'none';
        document.querySelector('.investment-plan').style.pointerEvents = 'auto';
    });
});

//function to logout user onclick of the log out a tag
document.addEventListener('DOMContentLoaded', function() {
    // Function to log out the user
    function logoutUser() {
        // Clear user data from localStorage or sessionStorage
        localStorage.removeItem('userToken');
        localStorage.removeItem('userData');
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('userData');

        // Redirect to the login page
        window.location.href = 'logout.html';
    }

    // Add event listener to the logout link
    const logoutLinks = document.querySelectorAll('.logout-link');
    if (logoutLinks) {
        logoutLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const confirmation = confirm('Are you sure you want to log out?');
                if (confirmation) {
                    logoutUser();
                }
            });
        });
    }

    // Check if the user is on the logout page
    if (window.location.pathname.endsWith('logout.html')) {
        // Display a message to the user
        document.querySelector('.content').innerHTML = `
            <p>You have been logged out successfully.</p>
            <a class="register" href="logined_pages/login.html">Log In Again</a>
        `;
    }
});

//function that will update the profile and store data for edit_account.html
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle profile picture upload
    const profilePictureInput = document.getElementById('profile-picture-upload');
    const profilePictureImg = document.getElementById('profile-picture');

    profilePictureInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePictureImg.src = e.target.result;
                localStorage.setItem('profilePicture', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Function to save user data to localStorage
    const editAccountForm = document.getElementById('edit-account-form');
    editAccountForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const userData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            bitcoinWallet: document.getElementById('bitcoin-wallet').value,
            usdtWallet: document.getElementById('usdt-wallet').value,
            ethereumWallet: document.getElementById('ethereum-wallet').value,
            dogecoinWallet: document.getElementById('dogecoin-wallet').value,
            email: document.getElementById('email').value,
            retypedEmail: document.getElementById('retyped-email').value,
            profilePicture: localStorage.getItem('profilePicture') // Store profile picture data
        };

        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Account information updated successfully!');
    });

    // Function to load user data from localStorage
    function loadUserData() {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            document.getElementById('profile-picture-upload').value = userData.profilePicture;
            document.getElementById('username').value = userData.username;
            document.getElementById('password').value = userData.password;
            document.getElementById('bitcoin-wallet').value = userData.bitcoinWallet;
            document.getElementById('usdt-wallet').value = userData.usdtWallet;
            document.getElementById('ethereum-wallet').value = userData.ethereumWallet;
            document.getElementById('dogecoin-wallet').value = userData.dogecoinWallet;
            document.getElementById('email').value = userData.email;
            document.getElementById('retyped-email').value = userData.retypedEmail;
            if (userData.profilePicture) {
                profilePictureImg.src = userData.profilePicture;
            }
        }
    }
    console.log(storedUserData);

    // Load user data when the page loads
    loadUserData();
});

//function to validate and store the data inputed in the signup.html
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const fullName = document.getElementById('full-name').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const email = document.getElementById('email').value;
        const bitcoinWallet = document.getElementById('bitcoin-wallet').value;
        const usdtWallet = document.getElementById('usdt-wallet').value;
        const ethereumWallet = document.getElementById('ethereum-wallet').value;
        const dogecoinWallet = document.getElementById('dogecoin-wallet').value;
        const secretQuestion = document.getElementById('secret-question').value;
        const secretAnswer = document.getElementById('secret-answer').value;

        // Validate the form
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Store the user details
        const userDetails = {
            fullName,
            username,
            password,
            phoneNumber,
            email,
            bitcoinWallet,
            usdtWallet,
            ethereumWallet,
            dogecoinWallet,
            secretQuestion,
            secretAnswer
        };

        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        alert('Registration successful! Redirecting to login page...');
        window.location.href = './logined_pages/login.html'; // Redirect to login page
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});

//function for withdrawal request for withdraw.html
document.addEventListener('DOMContentLoaded', function() {
    const withdrawForm = document.querySelector('.withdraw-form');
    withdrawForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Your withdrawal request will be confirmed in a few seconds");
        // You can add your form submission logic here
        withdrawForm.submit();
    });
});




/*//transaction history drop down and functionality
document.addEventListener('DOMContentLoaded', function() {
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    const yearSelect = document.getElementById('year');
    const currencyMonthSelect = document.getElementById('currency-month');
    const currencyDaySelect = document.getElementById('currency-day');
    const currencyYearSelect = document.getElementById('currency-year');
    const transactionHistoryDiv = document.getElementById('transaction-history');

    function updateTransactionHistory() {
        const month = monthSelect.value;
        const day = daySelect.value;
        const year = yearSelect.value;
        const currencyMonth = currencyMonthSelect.value;
        const currencyDay = currencyDaySelect.value;
        const currencyYear = currencyYearSelect.value;

        
        // Fetch and display transaction history based on selected dates and currencies
        console.log(`Selected Date: ${month} ${day}, ${year}`);
        console.log(`Selected Currency Date: ${currencyMonth} ${currencyDay}, ${currencyYear}`);
        // Fetch transaction history from API
        fetch(`https://api.example.com/transactions?month=${month}&day=${day}&year=${year}&currencyMonth=${currencyMonth}&currencyDay=${currencyDay}&currencyYear=${currencyYear}`)
            .then(response => response.json())
            .then(data => {
                // Clear previous transaction history
                transactionHistoryDiv.innerHTML = '';

                // Display transaction history
                data.transactions.forEach(transaction => {
                    const transactionDiv = document.createElement('div');
                    transactionDiv.classList.add('transaction-item');
                    transactionDiv.innerHTML = `
                        <p>Date: ${transaction.date}</p>
                        <p>Type: ${transaction.type}</p>
                        <p>Amount: ${transaction.amount}</p>
                        <p>Currency: ${transaction.currency}</p>
                    `;
                    transactionHistoryDiv.appendChild(transactionDiv);
                });
            })
            .catch(error => {
                console.error('Error fetching transaction history:', error);
            });
    }

    monthSelect.addEventListener('change', updateTransactionHistory);
    daySelect.addEventListener('change', updateTransactionHistory);
    yearSelect.addEventListener('change', updateTransactionHistory);
    currencyMonthSelect.addEventListener('change', updateTransactionHistory);
    currencyDaySelect.addEventListener('change', updateTransactionHistory);
    currencyYearSelect.addEventListener('change', updateTransactionHistory);
});*/
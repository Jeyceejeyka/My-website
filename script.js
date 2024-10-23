// JAVASCRIPT CODE FOR THE HOME PAGE.
// responsiveness for header 

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});


fetch ('https://maps.app.goo.gl/Lsqm9VwWcANWyZfV9') 
 .then(res => res.json()).then((data) => {

 })

 //end

 // input email 
const submit = document.getElementById('submit-btn-email');
submit.addEventListener('click', () => {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Simple validation for email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        // Generate a random confirmation code
        const confirmationCode = Math.floor(100000 + Math.random() * 900000); // 6-digit code

        alert(`Congratulations! You've successfully signed up for updates.\nYour confirmation code is: ${confirmationCode}`);
        
        // Clear the input field
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});


//end 

//javascript for the community page

function filterResources() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resourceSection = document.getElementById('resourceSection');
    const cards = resourceSection.getElementsByClassName('resource-card');
    const result = document.getElementById("result")

    Array.from(cards).forEach(card => {
        const cardText = card.innerText.toLowerCase();
        if (cardText.includes(input)) {
            card.style.display = ''; // Show card
        } else {
            card.style.display = 'none'; // Hide card
        }

        if (!cardText.includes(input)) {
            result.innerText = "!Opps No Data"
            result.style.display = "flex"
            return result
        } else {
            result.innerText = ""
        }
    });
}


//end

//javascript for resources page

function filterResources() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resourceCards = document.querySelectorAll('.resource-card');
    

    resourceCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchInput) ? 'block' : 'none';
    });

    
}



// The below commented js code is for the  upcoming development;

/* contacts info  */
//email sending info plus other source code found in the head title
/*function sendMail() {
    let params = {
        from_name: document.getElementById("from-name").value,
        to_name: document.getElementById("to-name").value,
        message: document.getElementById("message").value,

    }

    const serviceID = "service_iv6siw8";
    const templateID = "template_vev6mzr";

    emailjs
        .sendForm(serviceID,templateID,params)
        .then((res) => {
            document.getElementById("from-name").value = "";
            document.getElementById("to-name").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your Message Was Sent Successfully")
        }).catch((err) => console.log(err));

}


    

 const btn = document.getElementById("button")

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault()

  btn.value = "Sending..."

  const serviceID = "service_iv6siw8"
  const templateID = "template_vev6mzr"

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email"
      alert("Sent!")
    },
    (err) => {
      btn.value = "Send Email"
      alert(JSON.stringify(err))
    },
  )
})

// learning page javascript

let currentVideoIndex = 0;

function nextVideo(index) {
    const videos = document.querySelectorAll('.video-card');
    
    if (index < videos.length - 1) {
        currentVideoIndex++;
        const nextVideoCard = videos[currentVideoIndex];
        
        // Show popup when video ends (simulating with a timeout here)
        setTimeout(() => {
            showPopup();
        }, 1000); // Simulate video ending after 1 second for demo
    } else {
        alert("No more videos!");
    }
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}
*/

// social media links

document.addEventListener("DOMContentLoaded", function() {
    const socialMediaLinks = {
      facebook: "https://www.facebook.com/EdenburghCollegeBRT",
      twitter: "https://www.x.com",
      youtube: "https://www.youtube.com",
      instagram: "https://www.instagram.com"
    };
  
    const wrapper = document.getElementById("socialMediaLinks");
    const icons = wrapper.querySelectorAll(".icon");
  
    icons.forEach(icon => {
      const socialMedia = icon.classList[1]; // Gets the second class name (e.g., 'facebook', 'youtube')
      if (socialMediaLinks[socialMedia]) {
        const link = document.createElement("a");
        link.href = socialMediaLinks[socialMedia];
        link.target = "_blank"; // Opens the link in a new tab
  
        // Preserve the original style and classes
        link.className = icon.className;
        link.style.cssText = icon.style.cssText;
        
        // Move the child elements of the icon into the link
        while (icon.firstChild) {
          link.appendChild(icon.firstChild);
        }
  
        // Replace the icon with the link
        icon.parentNode.replaceChild(link, icon);
      }
    });
  });
  
  
  
  
  // Form Reset After Submit
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }
  
   
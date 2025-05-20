import React from 'react';

// About Us Component
const AboutUs = () => {
  return (
    <div style={containerStyles}>
      <header className='text-4xl font-serif font-bold mb-2 text-center'>
        <h1>About Us</h1>
      </header>

      <section style={sectionStyles}>
        <h2 className='text-lg font-semibold'>Our Story</h2>
        <p>
          Welcome to <strong>Sarah's Crochet Hub</strong>, a place where creativity and passion for crochet come together! Our journey started in 2025 when our founder, Sarah, discovered the calming and therapeutic beauty of crochet. What began as a hobby soon blossomed into a small business, and now we’re proud to offer hand-crafted crochet products that bring warmth and joy to homes around the world.
        </p>
        <p>
          Every stitch tells a story, and each of our pieces is made with love and attention to detail. Whether you're looking for a cozy blanket, a stylish scarf, or a unique gift for someone special, we have something just for you.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 className='text-lg font-semibold'>Our Values</h2>
        <ul>
          <li><strong>Quality Craftsmanship:</strong> We believe in the importance of quality. Each product is carefully hand-crafted to ensure durability and style.</li>
          <li><strong>Eco-Friendly:</strong> We prioritize sustainability by using eco-conscious yarns and materials. We aim to create beautiful items while respecting the planet.</li>
          <li><strong>Community:</strong> Crochet is more than just a craft; it’s a community. We love connecting with other crocheters and supporting local artisans.</li>
          <li><strong>Inclusivity:</strong> We celebrate all skill levels. Whether you're new to crochet or an expert, we’re here to inspire and support you in your creative journey.</li>
        </ul>
      </section>

      <section style={sectionStyles}>
        <h2 className='text-lg font-semibold'>Meet Our Founder</h2>
        <p>
          Sarah, the founder of Sarah's Crochet Hub, is a self-taught crocheter with a passion for crafting timeless designs. She started selling her creations at local craft fairs, and what was once a small side project quickly grew into a thriving business
        </p>
      </section>

      <section style={sectionStyles}>
        <h2 className='text-lg font-semibold'> Why Choose Us?</h2>
        <p>
          We offer more than just handmade crochet pieces. At Sarah's Crochet Hub, we pride ourselves on customer service, sustainability, and a deep love for the craft. Our products are designed to be practical, durable, and above all, beautiful. When you buy from us, you're not just getting a product – you're getting a piece of art made with heart.
        </p>
        <p>
          Join our growing crochet community and add a little handmade magic to your life. We can’t wait to share our love for crochet with you!
        </p>
      </section>

      <footer style={footerStyles}>
        <p>&copy; 2025 Sarah Crochet Hub | All Rights Reserved</p>
      </footer>
    </div>
  );
};

// Styles
const containerStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
  lineHeight: '1.6',
};

const sectionStyles = {
  marginBottom: '30px',
};

const footerStyles = {
  textAlign: 'center',
  paddingTop: '20px',
  fontSize: '14px',
  color: '#666',
};

export default AboutUs;

import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <section className='home-banner'>
        <div className='home-banner__text'>
          <h1>
            A collection of <br/>
            handmade ceramic products <br/>
            to re-imagine your <br/>
            personal space.</h1>
        </div>
        <figure className='home-banner__image'>
          <img src='/assets/images/banner-image2.jpg' alt='banner' />
        </figure>

        
        <figure className='home-banner__image__mobile'>
          <img src='/assets/images/banner-image2.jpg' alt='banner' />

          <div className='home-banner__text__mobile'>
            <h1>
            A collection of <br/>
            handmade ceramic products <br/>
            to re-imagine your <br/>
            personal space.
            </h1>
        </div>
        </figure>
      </section>


      <section className='products'>
        <h2>Our Products</h2>

        <div className='products__grid'>
          <ProductCard src='/assets/images/vase1.jpg' />
          <ProductCard src='/assets/images/vase2.jpg' />
          <ProductCard src='/assets/images/vase3.jpg' />
          <ProductCard src='/assets/images/cup1.jpg' />
          <ProductCard src='/assets/images/plate1.jpg' />
          <ProductCard src='/assets/images/plate2.jpg' />
          <ProductCard src='/assets/images/bowl2.jpg' />
          <ProductCard src='/assets/images/bowl1.jpg' />
        </div>
      </section>

      <section className='journal'>
        <h2>Journal</h2>

        <div className='journal__article-cont'> 
          <figure className='journal__image'>
            <img src='/assets/images/blog12.jpg' alt='banner' />
          </figure>

          <div className='journal__text'>
            <h3>What is the history of Philippine ceramics?</h3>
            <p>Traditional pot-making in certain areas of the Philippines would use clay found near the Sibalom River. Molding the clay required the use of wooden paddles, and the clay had to be kept away from sunlight. Native Filipinos created pottery since 3500 years ago. They used these ceramic jars to hold the deceased. Other pottery used to hold remains of the deceased were decorated with anthropomorphic designs. These anthropomorphic earthenware pots date back to 5 BC. - 225 A.D and had pot covers shaped like human heads. Filipino pottery had other uses as well. During the Neolithic period of the Philippines, pottery was made for water vessels, plates, cups, and for many other uses.</p>
            <button>
              <Link to='/journal/article'>Learn More</Link>
            </button>
          </div>
        </div>

        <div className='journal__article-cont'>
          <figure className='journal__image'>
            <img src='/assets/images/blog1.jpg' alt='banner' />
          </figure>

          <div className='journal__text'>
            <h3>The Ceramic Age Society</h3>
            <p>The city of Cebu itself was a major port with probably among the densest populated areas. The area about the coast of Iloilo and the City itself appeared to have been well peopled by this time as the area about the coast of Panay. Southeastern Negros as well as the south and eastern coast of Bohol showed evidences of foreign trade indicating nucleation of communities. Across the Bohol sea, in northeastern Mindanao, the areas about Butuan and up the Agusan river appeared to have well established population centers that were quite widespread considering the distribution of ceramics materials of very high quality and early age.</p>
            <button>
              <Link to='/journal/article'>Learn More</Link>
            </button>
          </div>
        </div>
      </section>

      <section className='reviews'>
        <h3>Forbes</h3>
        <p>"A favorite minimialist aesthetes around the world."</p>
      </section>


      <section className='about-banner'>
        <figure className='about-banner__image'>
          <img src='/assets/images/about1.jpg' alt='banner' />
        </figure>

        <div className='about-banner__text'>
          <h1>Helping local artisans from the Philippines.</h1>
          <p>With every purchase, 1% of profits goes back to organizations that further support local artists around the country.</p>
          <button>
            <Link to='/about'>About Us</Link>
          </button>
        </div>
      </section>

      <section className='newsletter'>
        <h2>Subscribe to our Newsletter.</h2>
        <p>Sign up with your email address to receive news and updates.</p>

        <form>
          <label htmlFor='first_name' hidden>First Name</label>
          <input type='text' id='first_name' placeholder='First Name' required />

          <label htmlFor='last_name' hidden>Last Name</label>
          <input type='text' id='last_name' placeholder='Last Name' required />

          <label htmlFor='email' hidden>Email</label>
          <input type='email' id='email' placeholder='Email' required />

          <input type='submit' value='Subscribe' />
          
        </form>
      </section>

    </div>
  );
}

export default Home;
import React from 'react'
import Video from '../Components/Video'
import Recent_news from '../Components/Recent_news'
import Schedule from '../Components/Schedule'
import Pricing from '../Components/Pricing';
import Speakers from './Speakers';
const faqs = [
  {
    question: "What should an SEO package include?",
    answer: ["When you are looking for an SEO package, there are a few things that you should keep in mind. The first is the size of your business. If you are a small business, you may not need all of the services that an SEO company offers. You may be able to get away with just basic services, such as keyword research and on-page optimization.",
      "Another thing to consider is your budget. An SEO package can be expensive, and it may not be affordable for everyone. If you are on a tight budget, you may want to look for a company that offers discounts or payment plans.",
      "Finally, you should consider the experience and reputation of the company. You want to work with someone who knows what they are doing and has a good track record."
    ]
  },
  {
    question: "How much is an SEO package?",
    answer: ["SEO is one of the most important aspects of online marketing. It can help you rank higher in search engine results pages, which can lead to more website visitors and more customers. If you’re looking for an SEO package, you may be wondering how much they cost.",
      "SEO packages vary in price, depending on the size and complexity of the project. Generally, smaller projects will cost less than larger ones. You can expect to pay anywhere from several hundred dollars to several thousand dollars for an SEO package.",
      "However, it’s important to remember that SEO is an ongoing process, and you should expect to pay monthly fees for maintenance and updates. The cost of an SEO package can be a good investment in your business’ success."
    ]
  },
  {
    question: "Are SEO packages worth it?",
    answer: ["There are a lot of SEO packages on the market. But are they worth the investment?",
      "The answer to that question depends on your business. If you’re just starting out, an SEO package can be a great way to get your website ranked higher in search engines. And if you’re looking for ways to improve your website’s ranking, an SEO package is definitely worth considering.",
      "But if you’ve been in business for a while and have a well-established website, an SEO package might not offer enough value to justify the cost. In that case, it might be better to focus on other areas of your marketing strategy."
    ]
  },
  {
    question: "Is SEO needed monthly?",
    answer: ["SEO is not a one-time job. It’s an ongoing process that needs to be tweaked and adjusted as search engine algorithms change. That’s why most SEO professionals recommend monthly SEO services.",
      "Monthly SEO can help ensure your website is always optimized for the best possible search engine ranking. It also allows you to track your website’s progress and make necessary adjustments along the way.",
      "If you’re looking for long-term success with your website, monthly SEO is a must. It keeps your website on top of search engine results pages, helping you attract more visitors and boost your business."
    ]
  },
  {
    question: "Can I do SEO on my own?",
    answer: ["Yes, you can do SEO on your own, but it’s important to remember that it’s a long-term process that takes patience and diligence. Professional SEO services can help you stay on track and make sure your website is performing at its best."
    ]
  },
  {
    question: "Should I hire someone to do my SEO?",
    answer: ["When it comes to SEO, there are a lot of things to think about. You need to make sure that your website is coded in a way that makes it easy for search engines to crawl, that you have quality content, and that you’re doing everything you can to get links from other websites. If all of this sounds like too much for you, or if you just don’t have the time to do it yourself, you may want to consider hiring an SEO agency.",
      "SEO agencies have a lot of experience when it comes to optimizing websites for search engines, and they can help you get your website ranked higher than your competition. They can also help you create content that is more likely to rank well and generate traffic.",
      "However, before you hire an SEO agency, make sure you do your research."
    ]
  },
  {
    question: "How much should a small business spend on SEO?",
    answer: ["Small businesses should be careful not to spend too much on SEO services each month. While it is important to invest in SEO, small businesses can quickly go over their budget if they’re not careful. It’s important to find a balance between the money you’re spending and the results you’re seeing.",
      "If you’re just starting out, it might be a good idea to invest in some basic services and see how they work for you. As your business grows, you can then start investing in more expensive services. Keep in mind that SEO is an ongoing process, so you’ll need to continue investing in it over time.",

    ]
  },
  {
    question: "What do SEO experts do?",
    answer: ["There is no one definitive answer to this question, as the work of an SEO expert can vary greatly depending on the specific needs of a client or company. However, in general, an SEO expert will work to improve a website’s search engine ranking by optimizing its content and structure for keywords, building backlinks, and improving its overall online visibility. They may also use various analytical tools to track the website’s progress and performance over time."

    ]
  },
];
const Home = () => {
  return (
    <div className='text-[100px]'>
      <Video/>
      <Schedule faqs={faqs} />
      <Speakers />
      <Pricing/>
      <Recent_news/>
      
    </div>
  )
}

export default Home
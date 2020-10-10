import React from 'react';
import Container from 'react-bootstrap/Container';

const Contact = () => (
  <Container>
    <h1>The Proto Company Project</h1>
    <h4>
      A client-facing retail web-portal had become significantly outdated and had been proven
      to be a source of decline in sales numbers. The Proto Company Project comprises a complete
      redesign of the retail portal designed to address concerns and modernize the site.

      The initial release will focus on providing the minimum viable product for the retail
      application. Features implemented were constrained to the client experience.
    </h4>
    <p>
      The product detail page will show relevant information for a single product in the catalogue.
      Our catalogue is organized by products. One single product can be associated with many sizes
      and styles which each result in unique SKUs. The product detail page will present items at the
      product level. Further breakdown by style or size will only be reflected within the product
      detail page.
    </p>
    <p>
      The same product detail page will be shown for every product in the catalogue. Upon navigating
      to the detail page or selecting a new product to display, the contents of the page will update
      to show information relevant to the selected product.
    </p>
    <p>
      The item detail page will be comprised of distinct modules. Each will display information
      related to the product being displayed. For the initial implementation, the following modules
      have been prioritized:
      <li>Product Detail - Critical Priority</li>
      <li>Ratings & Reviews - High Priority</li>
      <li>Questions & Answers - High Priority</li>
      <li>Related Items & Outfit Creation - High Priority</li>
    </p>
    <h3>Product Overview</h3>
    <h5>Designed and Developed By: Alison Sipos</h5>
    <li><a href="https://github.com/WildMountainAir">GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/siposalison/">LinkedIn</a></li>
    <p>
      The functionality contained within this module can be divided into several pieces:
      <li>Image gallery</li>
      <li>Product information</li>
      <li>Style selector</li>
      <li>Add to cart</li>
      This component will guide the customer through selecting a specific style and size to add to
      their cart. As such, portions of the Overview module, such as the image gallery and cart
      selection, will be specific to a SKU chosen as opposed to the overarching product.
    </p>
    <h3>Related Products and Comparison</h3>
    <h5>Designed and Developed By: Chris Williams</h5>
    <li><a href="https://github.com/williams-c">GitHub</a></li>
    {/* <li><a href="">LinkedIn</a></li> */}
    <p>
      The Related Items and Comparison module will display two sets of related products. The first
      set will be a list of products, determined internally, that are related to the product
      currently being viewed. The second set will be a list, custom created by the user, of products
      which the user has grouped with the current product into an ‘outfit’.
    </p>
    <h3>Question and Answers</h3>
    <h5>Designed and Developed By: Kym Hooper</h5>
    <li><a href="https://github.com/m0nstera">GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/kym-hooper-0674101b3/">LinkedIn</a></li>
    <p>
      The Questions & Answers module will allow asking and answering of questions for the product
      selected. The functionality contained within this module can be divided into several pieces:
      <li>View questions</li>
      <li>Search for a question</li>
      <li>Asking a question</li>
      <li>Answering a question</li>
      This component will extend the ability to view and search questions, ask questions, answer
      questions and provide feedback on questions about the current product. All questions will be
      asked and answered per product. Specific styles will not be accounted for within the module.
    </p>
    <h3>Ratings and Reveiws</h3>
    <h5>Designed and Developed By: Nick Timms</h5>
    <li><a href="https://github.com/OhHeyDeer">GitHub</a></li>
    {/* <li><a href="">LinkedIn</a></li> */}
    <p>
      The Ratings & Reviews module will allow viewing and submission of reviews for the product
      selected.  The functionality contained within this module can be divided into several pieces:
      <li>Write new review</li>
      <li>Reviews List</li>
      <li>Sorting</li>
      <li>Rating Breakdown</li>
      <li>Product Breakdown</li>
      This component will extend the ability to write, read, and browse through reviews for the
      current product. All reviews will be saved per product. Specific styles will not be accounted
      for within the review module.
    </p>
  </Container>
);

export default Contact;

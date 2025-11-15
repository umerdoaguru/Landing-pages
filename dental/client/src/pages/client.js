// 'use client';

// import styled from 'styled-components';
// import React from 'react';
// import { IoIosCheckmarkCircle } from 'react-icons/io';
// import { CiCircleMinus } from "react-icons/ci";

// import {  useLocation, useNavigate } from 'react-router-dom';

// var plans = [
//   {
//     name: 'DentalGuru Pro - Monthly',
//     price: '3999',
//     offerPrice: '1999',
//     description: 'Monthly plan with maintenance and features tailored for dental professionals.',
//     color:"#3b82f6",
//     features: [
//       { text: 'Including 1 Month Maintenance 50% Discount', included: true },
//       { text: 'Including 3 Month Maintenance 50% Discount + 1 Walk Through Video', included: false },
//       { text: 'Including 6 Month Maintenance 50% Discount + 1 month SMO', included: false },
//       { text: 'Including 1 Year Maintenance 50% Discount + Single Page React Website + 1 Month SMO', included: false },
//     ],
//   },
//   {
//     name: 'DentalGuru Pro - 3 Months',
//     price: '8999',
//     offerPrice: '4499',
//     description: '3-month plan offering discounts and additional features for extended service.',
//     color:"#06b6d4",
//     features: [
//       { text: 'Including 1 Month Maintenance 50% Discount', included: true },
//       { text: 'Including 3 Month Maintenance 50% Discount + 1 Walk Through Video', included: true },
//       { text: 'Including 6 Month Maintenance 50% Discount + 1 month SMO', included: false },
//       { text: 'Including 1 Year Maintenance 50% Discount + Single Page React Website + 1 Month SMO', included: false },
//       { text: 'Annual Maintenance Charge 0/- with 50% Discount + 5 Pages React Website + 2 Months SMO + 1 Premium Video', included: false },
//     ],
//   },
//   {
//     name: 'DentalGuru Pro - 6 Months',
//     price: '13399',
//     offerPrice: '7199',
//     description: 'Half-yearly plan with additional perks and a discount for longer duration.',
//     color:"#f2f",
//     features: [
//       { text: 'Including 1 Month Maintenance 50% Discount', included: true },
//       { text: 'Including 3 Month Maintenance 50% Discount + 1 Walk Through Video', included: true },
//       { text: 'Including 6 Month Maintenance 50% Discount + 1 month SMO', included: true },
//       { text: 'Including 1 Year Maintenance 50% Discount + Single Page React Website + 1 Month SMO', included: false },
//       { text: 'Annual Maintenance Charge 0/- with 50% Discount + 5 Pages React Website + 2 Months SMO + 1 Premium Video', included: false },
//     ],
//   },
//   {
//     name: 'DentalGuru Pro - 1 Year',
//     price: '23999',
//     offerPrice: '11999',
//     description: 'Yearly plan with the most comprehensive benefits and exclusive offers.',
//     color:"green",
//     features: [
//       { text: 'Including 1 Month Maintenance 50% Discount', included: true },
//       { text: 'Including 3 Month Maintenance 50% Discount + 1 Walk Through Video', included: true },
//       { text: 'Including 6 Month Maintenance 50% Discount + 1 month SMO', included: true },
//       { text: 'Including 1 Year Maintenance 50% Discount + Single Page React Website + 1 Month SMO', included: true },
//       { text: 'Annual Maintenance Charge 0/- with 50% Discount + 5 Pages React Website + 2 Months SMO + 1 Premium Video', included: false },
//       { text: 'Lifetime referral bonus', included: false },
//     ],
//   },
//   {
//     name: 'DentalGuru Pro - 5 Years',
//     price: '99999',
//     offerPrice: '49999',
//     description: '5-year plan for long-term dental practice needs with a lifetime referral bonus.',
//     color:"#321fd9",
//     features: [
//       { text: 'Including 1 Month Maintenance 50% Discount', included: true },
//       { text: 'Including 3 Month Maintenance 50% Discount + 1 Walk Through Video', included: true },
//       { text: 'Including 6 Month Maintenance 50% Discount + 1 month SMO', included: true },
//       { text: 'Including 1 Year Maintenance 50% Discount + Single Page React Website + 1 Month SMO', included: true },
//       { text: 'Annual Maintenance Charge 0/- with 50% Discount + 5 Pages React Website + 2 Months SMO + 1 Premium Video', included: true },
//       { text: 'Lifetime referral bonus + additional offers', included: false },
//     ],
//   },
//   {
//     name: 'DentalGuru Pro - Lifetime',
//     price: '199999',
//     offerPrice: '79999',
//     description: 'Lifetime plan with all-inclusive benefits for an extended period.',
//     color:"#C28514",
//     features: [
//       { text: 'Including 1 Month Maintenance 50% Discount', included: true },
//       { text: 'Including 3 Month Maintenance 50% Discount + 1 Walk Through Video', included: true },
//       { text: 'Including 6 Month Maintenance 50% Discount + 1 month SMO', included: true },
//       { text: 'Including 1 Year Maintenance 50% Discount + Single Page React Website + 1 Month SMO', included: true },
//       { text: 'Annual Maintenance Charge 0/- with 50% Discount + 5 Pages React Website + 2 Months SMO + 1 Premium Video', included: true },
//       { text: 'Lifetime referral bonus + exclusive features', included: true },
//     ],
//   },
// ];


// export default function PricingCards() {

//   const navigate = useNavigate();

//   const proceedToPayment = (plan) => {
//     navigate('/payment', { state: { cart: [plan], total: plan.offerPrice } }); // Pass the selected plan as cart data
//   };
//   return (
//     <Container>
//       {plans.map((plan) => (
//         <Card key={plan.name}>
//           <Label color={plan.color}>{plan.name}</Label>
//           <Price>
//             ₹{plan.offerPrice} <span>({plan.price} Original)</span>
//           </Price>
//           <Description>
//             {plan.description}
//           </Description>
//           <FeatureList>
//             {plan.features.map((feature, index) => (
//               <Feature key={index} included={feature.included}>
//                 {feature.included ? (
//                   <IoIosCheckmarkCircle style={{ width: "2rem" }} />
//                 ) : (
//                   <CiCircleMinus style={{ width: "2rem" }} />
//                 )}

//                 {/* <IoIosCheckmarkCircle style={{width:"3rem",}} /> */}
//                 {feature.text}
//               </Feature>
//             ))}
//           </FeatureList>
//           <Button onClick={() => proceedToPayment(plan)} >Checkout</Button>
//         </Card>
//       ))}
//     </Container>
//   );
// }

// var Container = styled.div`
// display: flex;
// flex-wrap: wrap;
// width: 75%;
//   justify-content: center;
//   gap: 20px;
//   min-height: 100vh;

//   padding: 20px;

//   @media (max-width: 768px) {
//     padding: 10px;
//   }
//   @media (max-width: 470px) {
//     padding: 4px;
//     width: 100%;
//   }
// `;

// var Card = styled.div`
//   position: relative;
//   background: white;
//   border: solid;
//   border-radius: 16px;
//   padding: 24px;
//   width: 100%;
//   max-width: 350px; // Set a maximum width to prevent excessive elongation
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 20px;
//   box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);

//   @media (max-width: 1024px) {
//     width: 100%;
//   }

//   @media (max-width: 768px) {
//     padding: 16px;
//   }

//   @media (max-width: 480px) {
//     padding: 12px;
//   }
// `;

// var Label = styled.div`
//   position: absolute;
//   top: -10px;
//   left: -10px;
//   background: ${(props) => props.color};
//   color: white;
//   padding: 8px 16px;
//   border-radius: 8px;
//   font-weight: 600;
//   font-size: 0.9rem;
// `;

// var Price = styled.div`
//   font-size: 2.5rem;
//   font-weight: 700;
//   margin-top: 20px;

//   span {
//     font-size: 1rem;
//     color: #666;
//     font-weight: normal;
//   }

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// var Description = styled.p`
//   color: #666;
//   font-size: 0.9rem;
//   line-height: 1.5;

//   @media (max-width: 768px) {
//     font-size: 0.85rem;
//   }
// `;

// var FeatureList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

// var Feature = styled.li`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   color: ${(props) => (props.included ? 'green' : 'greay')};
//   font-size: 1rem;
// `;

// var Button = styled.button`
//   background: #3b82f6;
//   color: white;
//   padding: 12px 20px;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   font-weight: 600;
//   transition: background-color 0.3s;

//   &:hover {
//     background: black;
//   }

//   @media (max-width: 768px) {
//     padding: 10px 18px;
//   }
// `;
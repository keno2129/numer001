import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
    
            <CardItem
              src='images/img_onsection.jpg'
              text='Bisection Method'
              label='Root Of Equattion'
              path='/Bisection'
            />
            <CardItem
              src='images/img_onsection.jpg'
              text='False-Position Method'
              label='Root Of Equattion'
              path='/Falseposition'
            />
            <CardItem
              src='images/img_onsection.jpg'
              text='Newton-Raphson Method'
              label='Root Of Equattion'
              path='/NewtonR'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img_onsection.jpg'
              text='Secant Method'
              label='Root Of Equattion'
              path='/secant'
            />
            <CardItem
              src='images/img_onsection.jpg'
              text='Cramer"s Rule '
              label='System Of Linear Equation'
              path='/camer'
            />
            <CardItem
              src='images/img_onsection.jpg'
              text='Gauss Elimination Method'
              label='System Of Linear Equatione'
              path='/gauss'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img_onsection.jpg'
              text='Gauss-Jordan Method'
              label='System Of Linear Equation'
              path='/jordan'
            />
            <CardItem
              src='images/img_onsection.jpg'
              text='LU Decomposition Method'
              label='System Of Linear Equation'
              path='/LU'
            />
            <CardItem
              src='images/img_onsection.jpg'
              text='Jacobi Iteration Method'
              label='System Of Linear Equation'
              path='/jacobi'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img_onsection.jpg'
              text='Gauss-Seidel Iteration Method'
              label='System Of Linear Equation'
              path='/seidel'
            />
            <CardItem
              src='images/img_onsection.jpg'
              text='Conjugate Gradient Method'
              label='System Of Linear Equation'
              path='/conjo'
            />
            <CardItem
              src='images/img_onsection.jpg'
              text='Cholesky Decomposition Method'
              label='System Of Linear Equation'
              path='/cholesky'
            />
            </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img_onsection.jpg'
              text='Newton divide'
              label='Interpolation Techniques'
              path='/Newton'
            />
            <CardItem
              src='images/img_onsection.jpg'
              text='Lagrange'
              label='Interpolation Techniques'
              path='/lagrange'
            />
            <CardItem
              src='images/img_onsection.jpg'
              text='Spline interpolation'
              label='Interpolation Techniques'
              path='/spline'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img_onsection.jpg'
              text='Least - squares Regression linear regression'
              label='Least - squares Regression'
              path='/leastRLinear'
            />
          <CardItem
              src='images/img_onsection.jpg'
              text='Least - squares Regression polynomials regression'
              label='Least - squares Regression'
              path='/leastRPoly'
            />
            <CardItem
              src='images/img_onsection.jpg'
              text='Least - squares Regression mutiple regression'
              label='Least - squares Regression'
              path='/leastRMuti'
            />
            {/* <CardItem
              src='images/img_onsection.jpg'
              text='test'
              label='Least - squares Regression'
              path='/test'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
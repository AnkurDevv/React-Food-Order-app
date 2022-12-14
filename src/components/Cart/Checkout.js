import classes from './Checkout.module.css';

const Checkout = props =>{
 return (
   <form action=''>
     <div className={classes.control}>
       <label htmlFor='name'>Your Name</label>
       <input type='text' id='name' />
     </div>
     <div className={classes.control}>
       <label htmlFor='street'>Street</label>
       <input type='text' id='street' />
     </div>
     <div className={classes.control}>
       <label htmlFor='postal'>Postal Code</label>
       <input type='text' id='postal' />
     </div>
     <div className={classes.control}>
       <label htmlFor='city'>City</label>
       <input type='text' id='city' />
     </div>
     {/* type=button below is important so that it doesnt submit the form */}
     <button type='button' onClick={props.onCancel}>Cancel</button> 
     <button>Confirm</button>
   </form>
 )
};

export default Checkout;
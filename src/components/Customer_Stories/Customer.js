import React, {useEffect} from 'react'
import CustomerSection1 from './Customer_section1/Customer_Section1'
function Customer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <CustomerSection1/>
    </div>
  )
}

export default Customer
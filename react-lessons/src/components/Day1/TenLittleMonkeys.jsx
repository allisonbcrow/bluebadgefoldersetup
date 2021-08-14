// 1. Create a Functional Component called TenLittleMonkeys
// 2. Use useState to set the initial Monkey Count to 10
// 3. Display how many monkeys are left in a sentece that says the following... 
// 10 little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!

// 4. Once the count gets to zero display "All the Monkeys fell off"
// 5. Button clicking should take 1 away from the total monkey counter

// 6. when count hits zero, another button appears, resets the value of number ten
//RAFCE "React Arrow Functional Component Export"

import { useState, useEffect } from "react";

// const monkeys = "little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!"
// const TenLittleMonkeys = () => {
// const [number, setNumber] = useState(10);
// const handleClick = (e) => {
//     if(number => 0) {
//         setNumber(number - 1);
//     } else {
//         setNumber("All the Monkeys fell off! ");
//     };
// }



//     return(
//         <div>
// {number} {monkeys}
//         <button onClick={handleClick}>Button</button>
//         </div>
//     )
// };

const TenLittleMonkeys = () => {
    const [monkeyCount, setMonkeyCount] = useState(10);
    const totalMonkeys =
    monkeyCount > 0
    ?  `${monkeyCount} little monkeys jumping on the bed one fell off and hit his head. Mama called the doctor and the doctor said. No more monkeys jumping on the bed!` : `All the monkeys fell off the bed.`
    return (
        <div>
            <p>{totalMonkeys}</p>
            <button onClick={() => setMonkeyCount( monkeyCount - 1)}>Lose a Monkey</button>
            {monkeyCount <= 0 ? (
                <button onClick={() => setMonkeyCount(10)}>Reset</button>
            ) : null}
        </div>
    );
};

export default TenLittleMonkeys;
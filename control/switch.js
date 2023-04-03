let a = 20;
switch (a) {                  //cannot e used for comparison, cannot use logical operators?
    case 30:                  //we say case value, 30 being the value of case a
        console.log("1",a);
        break;

    case 40:
        ;console.log("2",a);
        break;

    default:
        console.log("a was not found");
        break;
}
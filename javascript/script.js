 // 1. Variables & Comments
        function runSection1() {
            let x = 5;
            let y = 6;
            let z = x + y; // I am a Comment. I do Nothing
            document.getElementById("out1").innerHTML = "Value of z (5 + 6): " + z;
        }

        // 2. Literals
        function runSection2() {
            let numericLiteral = 10.50;
            let stringLiteral = 'John Doe'; 
            document.getElementById("out2").innerHTML = 
                "Numeric Literal: " + numericLiteral + "<br>String Literal: " + stringLiteral;
        }

        // 3. Keywords Case Sensitivity
        function runSection3() {
            let logMsg = "Successfully executed: let x = 5;<br>";
            try {
                // eval compiles text as code dynamically to demonstrate errors safely
                eval("LET faultyX = 5;");
            } catch (error) {
                logMsg += "<span style='color:red;'>Error caught executing 'LET faultyX = 5': " + error.message + "</span>";
            }
            document.getElementById("out3").innerHTML = logMsg;
        }

        // 4. Identifiers
        function runSection4() {
            let _validName = "Starts with underscore";
            let $validName = "Starts with dollar sign";
            let logMsg = "_validName value: " + _validName + "<br>$validName value: " + $validName;
            
            try {
                eval("let const = 10;");
            } catch(error) {
                logMsg += "<br><span style='color:red;'>Banned Naming Error (let const = 10): " + error.message + "</span>";
            }
            document.getElementById("out4").innerHTML = logMsg;
        }

        // 5. Expressions
        function runSection5() {
            let expr1 = (5 + 6) * 10;
            let expr2 = "John" + " " + "Doe";
            document.getElementById("out5").innerHTML = 
                "Expression (5 + 6) * 10 evaluates to: " + expr1 + "<br>" +
                "Expression 'John' + ' ' + 'Doe' evaluates to: " + expr2;
        }

        // 6. Variable Case Sensitivity
        function runSection6() {
            let lastName = "Doe";
            let lastname = "Peterson";
            document.getElementById("out6").innerHTML = 
                "lastName tracks: " + lastName + "<br>lastname tracks: " + lastname;
        }

        // 7. Camel Case & Hyphens
        function runSection7() {
            let firstName = "John"; // lowerCamelCase
            let logMsg = "Valid Camel Case Variable (firstName): " + firstName;
            
            try {
                eval("let first-name = 'John';");
            } catch(error) {
                logMsg += "<br><span style='color:red;'>Hyphen Error (let first-name): " + error.message + " (Interpreted as subtraction)</span>";
            }
            document.getElementById("out7").innerHTML = logMsg;
        }

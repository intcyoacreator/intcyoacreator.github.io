# IntScript
A specification for the programming language used in the Interactive CYOA
Creator 2.

IntScript provides high-level access into the objects of the ICC2. Using it,
one can create advanced functionality that would not be possible or easily
achievable without it.

## General IntScript
### Accessing objects via ID
Access them using square bracket notation:

```intscript
[ksh2] // returns the object
```

#### Getting their type
Get the type of an object using `.type()`.

```intscript
[ksh2].type() // returns Section
[of82].type() // returns Choice
[82sk].type() // returns Point
```

### Get list of all members of a type

```intscript
rows = section::all_members() // returns array of type Section
choices = choice::all_members() // returns array of type Choice
```

### Renaming an ID
```intscript
[02mf] = [jns8] // renames jns8 to 02mf, but doesn't change references to jns8

[02mf] = [jns8].move() // any references to [jns8] now go to [02mf]
```

### Creating IntScript variables
To create variables in IntScript, simply use the `=` sign.

```intscript
value = "Hello!"

// with manual type
value: string = "World!"
```

### Access ICC2 variables
To access and modify the variables made in ICC2, use the `#` sign.

if `#name` is equal to "Mary" and `#name2` is equal to "John" then:

`++` is used to concatenation, whereas `+` is used solely for addition.

```intscript
welcome_message = "Welcome " ++ #name ++ "!"

log(welcome_message) // prints: Welcome Mary!

log("And welcome to you too {#name2}!") // prints: And welcome to you too John!
```

### Functions
Declare functions with the `fn` keyword:

```intscript
fn hello(name):
    log("Hello {name}!")

hello("Tommy") // prints: Hello Tommy!
hello("Julia") // prints: Hello Julia!
```

## IntScript in Choices
### Code execution on event
#### Choice selection

```intscript
fn im_selected():
    log("This choice was selected!") // log to the console

this.on_select(im_selected)

this.on_select((_): {
    log("This choice was selected with an anonymous function!")
})
```

#### Choice deselection
```intscript
fn im_not_selected():
    log("This choice was deselected!")

this.on_deselect(im_not_selected)

this.on_deselect((_): {
    log("This choice was deselected!!!")
})
```

#### Choice suddenly losing requirements
```intscript
this.on_auto_deselect((_): {
    log("Auto de-selected!")
})
```

#### Choice selected by another choice or through IntScript
```intscript
this.on_auto_select((_): {
    log("Auto selected!")
})
```

#### Detect if the choice was acted on by a user or automatically
You use this by capturing the information object from the closure.

```intscript
this.on_select((i): {
    if i.auto:
        log("Automatically selected!")
    else:
        log("Manually selected!")
})

this.on_deselect((i): {
    if not i.auto:
        log("Manually deselected!")
    else:
        log("Automatically deselected!")
})
```

#### Choice hover
```intscript
this.on_hover((): {
    this.style["color"] = "#FFFFFF"
})
```

## IntScript in Requirements

### Setting requirements declaratively
```intscript
[hs00].type() // returns Section, this will hide

// show row only if `78sv` is selected
[hs00].add_requirement([78sv])
[hs00].add_selected_requirement([78sv]) // same as the above

// show row only if `ops8` is not selected
[hs00].add_requirement(![ops8])
[hs00].add_non_selected_requirement([ops8]) // same as the above

// show row only if expression equals true
[sfj5].type() // returns Point
[hs00].add_requirement({[sfj5] > 10})
[hs00].add_requirement([sfj5] > 10) // same as above, curly brackets only
                                    // needed if it's an advanced expression
                                    // that spans multiple lines
[hs00].add_requirement({
    if [sfj5] > 5 and [sfj5] < 10:
        return true // 6-9
    else if [sfj5 <= 5] and [sfj5 >= 0]:
        return false // 0-5
    else:
        return true // <0 or 10+
})

```

### Checking requirements using logic
```intscript
[lo2s].type() // returns Choice
this.type() // returns Choice; the object this script is attached to is a
            // Choice

// If 
if [lo2s].not_selected():
    this.lock() // lock the objects 

// Arbitrary logic nesting
if [n2s8].selected() and [n26d].shown() and (
    [lshy].selected() and not [p2nf].selected()
):
    // displayable value with a `.shadow()` method basically temporarily sets
    // the value, up until the point where the requirements are no longer met
    this.description.shadow("Wow, this is complex!")

```
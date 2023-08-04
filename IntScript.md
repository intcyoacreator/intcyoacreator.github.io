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
[82sk].type() // returns 
```

### Get list of all members of a type

```intscript
rows = section::all_members() // returns array of type Section
choices = choice::all_members() // returns array of type Choice
```

## IntScript in Choices
### Code execution on event
#### Choice selection

```intscript
fn im_selected():
    log("This choice was selected!") // log to the console

this.on_select(im_selected)

this.on_select((): {
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
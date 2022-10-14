# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

#Pseudocode

# First I define a method using def end and name it contains_o_t. 
# I pass two parameters array and letter.
# then I use .select method (which works like filter() in JS) to iterate over array and return a new array that includes items that meet conditions in our do end statement
# do/end statement "takes" each element value and check if it contains a particular letter, if so, it pushes the element into our new filtered array.
# I call the method and pass arguments beverages_array, "t" or beverages_array, "o"

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def contains_o_t (array, letter)
    array.select do |value|
        value.include? letter
    end
end
p contains_o_t(beverages_array, "t")


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

#Preudocode 

# First I use hash.values. It will return only values of the hash and will not return keys. In other words it returns a new array that contains the values from hash. 
# next I use flatten method to return a new array in which all elements of sub-arrays are concatenated/it convert nested array into a single array.
# And finally I use sort method to sort elements in an alphabetical order. 

def singleArr (hash)
    hash.values.flatten.sort
end
p singleArr(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    
    #setter method
    def set_model(model)
        @model = model
    end

    #getter method
    def get_model
        @model
    end
    
    def get_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end 


    def pedal_faster(speed)
        @current_speed += speed
    end

    def brake(speed)

        if (@current_speed - speed < 0)
            @current_speed = 0
            

        elsif  (@current_speed >= 1)
                @current_speed -= speed

        # elsif 
        #     (@current_speed - speed).negative?
        #         @current_speed = 0        
         end
    end
 
end

trek = Bike.new('Trek')
p trek.get_info

my_bike = Bike.new('Trek')

p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)

p my_bike.brake(5)
p my_bike.brake(25)

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'





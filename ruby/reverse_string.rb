def reverse_string(str)
  # type your code in here
  reversed_string = []
  str.length.times do |i|
    reversed_string << str[str.length-1]
    str = str.chop
  end
  reversed_string.join
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  puts "Expecting: 'sailE'"
  puts "=>", reverse_string('Elias')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution

#Pseudocode

# define method that accepts a string as an argument
# define new_string variable set to an empty array

# iterate over each character in the string
# add last character from string to  the empty array
#delete last character from the string
# join the letters in array to a string

# return new_string in reverse order

#Explanation : First you have to define a reversed_string Array. Than when you iterate
#over the string grab the last character of the original string and add it to the reversed_string array.
#Then you have to use .chop to remove the last character from the string and mutate the string.
#Now you have an array of letters in reverse order so you use .join to join the letters and return it as
#a reversed string.
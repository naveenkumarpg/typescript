// Simple function
function square(a) {
  a.toUppercase();
  a();
  return a * a;
}

// Function with parameter types
function add(a: number, b: number) {
  return a + b;
}

add(1, 3);
add(1, 'some');

// Function with parameter restriction and output restriction
function addition(a: number, b: number): number {
  return a * b;
}

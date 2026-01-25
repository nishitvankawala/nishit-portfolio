# Adding Your Professional Photo

To complete your portfolio and match the mockup design:

## 1. Add Your Photo
- Save your professional photo as `public/profile-photo.jpg` (or .png)
- Recommended size: 400x500px or similar portrait ratio
- High quality, professional headshot with good lighting

## 2. Update the Hero Component
Replace the placeholder in `components/Hero.tsx` around line 45:

```jsx
{/* Replace this placeholder div */}
<div className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center">
  {/* ... placeholder content ... */}
</div>

{/* With this image */}
<div className="w-80 h-96 rounded-2xl overflow-hidden border border-gray-700">
  <img 
    src="/profile-photo.jpg" 
    alt="Nishit Vankawala - Senior Full Stack Engineer"
    className="w-full h-full object-cover"
  />
</div>
```

## 3. Update Contact Links
In the same Hero component, update the button links:
- Download Resume: Add your resume file to `public/` and update the href
- GitHub: Add your GitHub profile URL
- LinkedIn: Add your LinkedIn profile URL

Your portfolio now matches the cosmic design from your mockup!
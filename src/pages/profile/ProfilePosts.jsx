import React, { useState } from 'react'
import {
    Heart, MessageCircle, Share2, Bookmark, MoreHorizontal,
    Clock, MapPin, Camera, Video, Smile, PawPrint, Award, AlertTriangle
} from 'lucide-react'

const ProfilePosts = ({ user }) => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            content: "Just adopted this beautiful golden retriever from the local shelter! Meet Luna 🐕 She's already stolen my heart. #AdoptDontShop #GoldenRetriever #NewFamilyMember",
            images: ['/api/placeholder/400/300'],
            timestamp: '2 hours ago',
            location: 'Downtown Animal Shelter',
            likes: 24,
            comments: 8,
            shares: 3,
            isLiked: true,
            isBookmarked: false,
            type: 'adoption'
        },
        {
            id: 2,
            content: "Reminder: There's a pet vaccination drive this weekend at Central Park! Free vaccines for all pets. Spread the word! 📢 #PetHealth #Community #FreeVaccination",
            timestamp: '1 day ago',
            likes: 18,
            comments: 5,
            shares: 12,
            isLiked: false,
            isBookmarked: true,
            type: 'announcement'
        },
        {
            id: 3,
            content: "Training session with Max is going great! He's finally learned to sit and stay. Patience really pays off when it comes to training rescue dogs. Any tips for teaching 'roll over'? 🎾",
            images: ['/api/placeholder/300/300', '/api/placeholder/300/300'],
            timestamp: '3 days ago',
            location: 'Riverside Dog Park',
            likes: 31,
            comments: 12,
            shares: 2,
            isLiked: true,
            isBookmarked: false,
            type: 'training'
        },
        {
            id: 4,
            content: "URGENT: Lost cat in the downtown area! White Persian cat with blue collar, responds to 'Snowball'. Please share if you see her! 🆘 #LostPet #PersianCat #DowntownArea",
            images: ['/api/placeholder/250/300'],
            timestamp: '5 days ago',
            likes: 67,
            comments: 23,
            shares: 45,
            isLiked: false,
            isBookmarked: true,
            type: 'alert'
        },
        {
            id: 5,
            content: "Volunteered at the animal shelter today. These amazing volunteers do such incredible work! If you have some free time, consider volunteering. These animals need all the love they can get ❤️",
            timestamp: '1 week ago',
            likes: 42,
            comments: 15,
            shares: 8,
            isLiked: true,
            isBookmarked: false,
            type: 'volunteer'
        }
    ])

    const [newPost, setNewPost] = useState('')

    const handleLike = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId
                ? {
                    ...post,
                    isLiked: !post.isLiked,
                    likes: post.isLiked ? post.likes - 1 : post.likes + 1
                }
                : post
        ))
    }

    const handleBookmark = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId
                ? { ...post, isBookmarked: !post.isBookmarked }
                : post
        ))
    }

    const getPostTypeIcon = (type) => {
        switch (type) {
            case 'adoption': return <PawPrint className="w-4 h-4 text-blue-500" />
            case 'alert': return <AlertTriangle className="w-4 h-4 text-red-500" />
            case 'training': return <Award className="w-4 h-4 text-green-500" />
            case 'volunteer': return <Heart className="w-4 h-4 text-purple-500" />
            default: return null
        }
    }

    const getPostTypeColor = (type) => {
        switch (type) {
            case 'adoption': return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
            case 'alert': return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
            case 'training': return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
            case 'volunteer': return 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800'
            default: return 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
        }
    }

    return (
        <div className="space-y-6">
            {/* Create Post */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {user?.name?.charAt(0)}
                    </div>
                    <div className="flex-1">
            <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share something about your pets..."
                className="w-full p-3 border-0 resize-none bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-600"
                rows="3"
            />
                        <div className="flex items-center justify-between mt-3">
                            <div className="flex space-x-3">
                                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    <Camera className="w-5 h-5 mr-1" />
                                    Photo
                                </button>
                                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    <Video className="w-5 h-5 mr-1" />
                                    Video
                                </button>
                                <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    <MapPin className="w-5 h-5 mr-1" />
                                    Location
                                </button>
                            </div>
                            <button
                                disabled={!newPost.trim()}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Posts Feed */}
            {posts.map((post) => (
                <div key={post.id} className={`rounded-lg shadow-sm p-6 border ${getPostTypeColor(post.type)}`}>
                    {/* Post Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {user?.name?.charAt(0)}
                            </div>
                            <div>
                                <div className="flex items-center space-x-2">
                                    <h3 className="font-medium text-gray-900 dark:text-white">{user?.name}</h3>
                                    {getPostTypeIcon(post.type)}
                                </div>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.timestamp}</span>
                                    {post.location && (
                                        <>
                                            <span>•</span>
                                            <MapPin className="w-4 h-4" />
                                            <span>{post.location}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Post Content */}
                    <div className="mb-4">
                        <p className="text-gray-900 dark:text-white leading-relaxed">{post.content}</p>
                    </div>

                    {/* Post Images */}
                    {post.images && post.images.length > 0 && (
                        <div className={`mb-4 grid gap-2 ${post.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                            {post.images.map((image, index) => (
                                <div key={index} className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <Camera className="w-8 h-8" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Post Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3 pb-3 border-b border-gray-200 dark:border-gray-600">
                        <div className="flex items-center space-x-4">
                            <span>{post.likes} likes</span>
                            <span>{post.comments} comments</span>
                            <span>{post.shares} shares</span>
                        </div>
                    </div>

                    {/* Post Actions */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                            <button
                                onClick={() => handleLike(post.id)}
                                className={`flex items-center space-x-2 transition-colors ${
                                    post.isLiked
                                        ? 'text-red-500 hover:text-red-600'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400'
                                }`}
                            >
                                <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
                                <span>Like</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                <MessageCircle className="w-5 h-5" />
                                <span>Comment</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                                <Share2 className="w-5 h-5" />
                                <span>Share</span>
                            </button>
                        </div>
                        <button
                            onClick={() => handleBookmark(post.id)}
                            className={`transition-colors ${
                                post.isBookmarked
                                    ? 'text-blue-500 hover:text-blue-600'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400'
                            }`}
                        >
                            <Bookmark className={`w-5 h-5 ${post.isBookmarked ? 'fill-current' : ''}`} />
                        </button>
                    </div>

                    {/* Quick Comment Section */}
                    {post.comments > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                            <div className="flex space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    S
                                </div>
                                <div className="flex-1">
                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                                        <p className="text-sm text-gray-900 dark:text-white">
                                            <span className="font-medium">Sarah Chen:</span> So adorable! Congratulations on the adoption! 🎉
                                        </p>
                                    </div>
                                    <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400 space-x-4">
                                        <button className="hover:underline">Like</button>
                                        <button className="hover:underline">Reply</button>
                                        <span>1h</span>
                                    </div>
                                </div>
                            </div>

                            {post.comments > 1 && (
                                <button className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                    View {post.comments - 1} more comments
                                </button>
                            )}
                        </div>
                    )}
                </div>
            ))}

            {/* Load More */}
            <div className="text-center py-8">
                <button className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Load More Posts
                </button>
            </div>
        </div>
    )
}

export default ProfilePosts
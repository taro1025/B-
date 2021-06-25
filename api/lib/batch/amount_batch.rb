class Batch::AmountBatch
  #4日ごとの記録。それぞれ４、８、１２、１６、２０、２４、２８日に行う
  def self.batch_amount
    if Date.today.day == 4
      User.all.each do |user|
        amount_book = user.amount_book
        amount_book.camulative_page_four = amount_book.camulative_page_now
        amount_book.save
    elsif Date.today.day == 8
      User.all.each do |user|
        amount_book = user.amount_book
        amount_book.camulative_page_eight = amount_book.camulative_page_now
        amount_book.save
      end
    elsif Date.today.day == 12
      User.all.each do |user|
        amount_book = user.amount_book
        amount_book.camulative_page_twelve = amount_book.camulative_page_now
        amount_book.save
      end
    elsif Date.today.day == 16
      User.all.each do |user|
        amount_book = user.amount_book
        amount_book.camulative_page_six_teen = amount_book.camulative_page_now
        amount_book.save
      end
    elsif Date.today.day == 20
      User.all.each do |user|
        amount_book = user.amount_book
        amount_book.camulative_page_twenty = amount_book.camulative_page_now
        amount_book.save
      end
    elsif Date.today.day == 24
      User.all.each do |user|
        amount_book = user.amount_book
        amount_book.camulative_page_twenty_four = amount_book.camulative_page_now
        amount_book.save
      end
    elsif Date.today.day == 28
      User.all.each do |user|
        amount_book = user.amount_book
        amount_book.camulative_page_twenty_eight = amount_book.camulative_page_now
        amount_book.save
      end
      #今月の記録を先月の記録に移す。月末に行う。
    elsif Date.today.day == Date.new(Time.now.year, Time.now.month, -1).day
      User.all.each do |user|
        amount_book = user.amount_book
        amount_book.amount_book_last = amount_book.amount_book_this
        amount_book.amount_page_last = amount_book.amount_page_this
        amount_book.save
      end
    end
  end
end
